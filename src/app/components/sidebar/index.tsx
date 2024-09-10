import React from 'react';

import { Asset } from '../../interfaces/asset';
import { Location } from '../../interfaces/location';
import { getIcon } from '../../utils/get-icon';
import { organizeTree } from '../../utils/organizeTree';

import { Label, SidebarContainer, TreeItem } from './styled';

interface SidebarProps {
  locations: Location[];
  assets: Asset[];
}

interface TreeNode {
  id: string;
  name: string;
  type: string;
  sensorType?: string;
  status?: string;
  children?: TreeNode[];
}

export const Sidebar: React.FC<SidebarProps> = ({ locations, assets }) => {
  const tree = organizeTree(locations, assets);

  const renderTree = (nodes: Record<string, TreeNode>, level: number = 0) => {
    return Object.values(nodes).map((node) => (
      <div key={node.id}>
        <TreeItem level={level}>
          {/* {level && <span>{level}</span>} */}
          <div className="content">
            <img src={getIcon(node.type)} alt={`${node.type} icon`} />
            <Label>
              {node.name}

              {node.type === 'component' ? (
                node.sensorType === 'energy' ? (
                  <span>⚡</span>
                ) : node.status !== null ? (
                  <span>
                    {node.status === 'operating' ? ' 🟢' : ' 🔴'}
                  </span>
                ) : null
              ) : null}
            </Label>
          </div>
        </TreeItem>
        {node.children && renderTree(node.children.reduce((acc, child) => {
          acc[child.id] = child;
          return acc;
        }, {} as Record<string, TreeNode>), level + 1)}
      </div>
    ))
  }

  return (
    <SidebarContainer>
      {renderTree(tree)}
    </SidebarContainer>
  );
};
