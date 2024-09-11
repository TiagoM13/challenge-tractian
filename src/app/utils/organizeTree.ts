/* eslint-disable @typescript-eslint/no-explicit-any */
import { Asset } from "../interfaces/asset";
import { Location } from "../interfaces/location";

export const organizeTree = (locations: Location[], assets: Asset[]) => {
  const tree: Record<string, any> = {};
  const nodesMap: Record<string, any> = {};

  const addNode = (node: any, parentId: string | null) => {
    nodesMap[node.id] = node;

    if (!parentId) {
      tree[node.id] = node;
    } else {
      const parent = findParent(tree, parentId);

      if (!parent) {
        return;
      }

      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(node);
    }
  };

  const findParent = (tree: Record<string, any>, parentId: string): any => {
    if (tree[parentId]) {
      return tree[parentId];
    }

    for (const key in tree) {
      if (tree[key].children) {
        const parent = findParent(tree[key].children.reduce((acc: Record<string, any>, child: any) => {
          acc[child.id] = child;
          return acc;
        }, {}), parentId);
        if (parent) return parent;
      }
    }
    return null;
  };

  locations.forEach((location) => {
    if (location) {
      addNode({ ...location, type: 'location' }, location.parentId || null);
    }
  });

  assets.forEach((asset) => {
    if (asset) {
      const parentId = asset.parentId || asset.locationId!;
      if (!parentId && !asset.sensorType) {
        addNode({ ...asset, type: 'asset' }, null);
      } else if (asset.sensorType) {
        addNode({ ...asset, type: 'component' }, parentId);
      } else {
        addNode({ ...asset, type: 'asset' }, parentId);
      }
    }
  });

  return tree;
};

