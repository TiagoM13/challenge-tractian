import React, { useState } from 'react';
import { Circle, Lightning } from '@phosphor-icons/react';

import { Asset } from '@/app/interfaces/asset';
import { Location } from '@/app/interfaces/location';
import { getIcon } from '@/app/utils/get-icon';
import { organizeTree } from '@/app/utils/organizeTree';

import { SearchInput } from '../search';

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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const tree = organizeTree(locations, assets);

  const handleItemClick = (id: string) => {
    setSelectedId(id);
  };

  const renderTree = (nodes: Record<string, TreeNode>, level: number = 0) => {
    return Object.values(nodes).map((node) => (
      <div key={node.id}>
        <TreeItem
          level={level}
          selected={node.id === selectedId && node.type === 'component'}
          onClick={() => handleItemClick(node.id)}
        >
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
      <SearchInput />

      <div className="content-sidebar">
        {renderTree(tree)}
      </div>
    </SidebarContainer>
  );
};
