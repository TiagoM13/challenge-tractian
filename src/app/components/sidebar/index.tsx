import React from 'react';

import { Asset } from '../../interfaces/asset';
import { Location } from '../../interfaces/location';
import { getIcon } from '../../utils/get-icon';
import { organizeTree } from '../../utils/organizeTree';

import { ContentSearch, Label, SidebarContainer, TreeItem } from './styled';
import { Circle, Lightning, MagnifyingGlass } from '@phosphor-icons/react';

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
                  <Lightning size={16} color="#52C41A" weight="fill" />
                ) : node.status !== null ? (
                  <>
                    {node.status === 'operating'
                      ? <Circle size={14} weight="fill" color='#52C41A' />
                      : <Circle size={14} weight="fill" color='#ED3833' />
                    }
                  </>
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
      <ContentSearch>
        <input
          type="search"
          name="assets"
          id="asset"
          placeholder="Buscar Ativo ou Local"
        />
        <MagnifyingGlass size={16} />
      </ContentSearch>

      <div className="content-sidebar">
        {renderTree(tree)}
      </div>
    </SidebarContainer>
  );
};
