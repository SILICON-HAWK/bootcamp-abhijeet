import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import CollapsiblePanel from './CollapsiblePanel'

// Define types for the node and hierarchy
interface Node {
  iri: string
  label: string
  children?: Node[]
}

interface Hierarchy {
  iri: string
  label: string
  parents: Node[]
  children: Node[]
}

// Define the props for TreeNode component
interface TreeNodeProps {
  node: Node
  level?: number
  onSelect: (node: Node) => void
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level = 0, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <Card className="ml-2 mb-1 p-2 w-60 dark:hover:bg-slate-800 hover:bg-slate-300">
      <CardHeader className="flex items-center p-2">
        {hasChildren && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0 h-6 w-6"
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </Button>
        )}
        <CardTitle className="flex-1 cursor-pointer" onClick={() => onSelect(node)}>
          {node.label}
        </CardTitle>
      </CardHeader>
      {isExpanded && hasChildren && (
        <CardContent className="ml-4 p-2">
          {node.children?.map((child) => (
            <TreeNode key={child.iri} node={child} level={level + 1} onSelect={onSelect} />
          ))}
        </CardContent>
      )}
    </Card>
  )
}

// Define the props for DiseaseHierarchy component
interface DiseaseHierarchyProps {
  hierarchy: Hierarchy
  onSelect: (node: Node) => void
}

const DiseaseHierarchy: React.FC<DiseaseHierarchyProps> = ({ hierarchy, onSelect }) => {
  return (
    <div className="mt-4">
      {hierarchy.parents.length > 0 && (
        <CollapsiblePanel title="Parents">
          {hierarchy.parents.map((parent) => (
            <TreeNode key={parent.iri} node={parent} onSelect={onSelect} />
          ))}
        </CollapsiblePanel>
      )}
      <CollapsiblePanel title="Current Disease">
        <TreeNode node={hierarchy} onSelect={onSelect} />
      </CollapsiblePanel>
      {hierarchy.children.length > 0 && (
        <CollapsiblePanel title="Children">
          {hierarchy.children.map((child) => (
            <TreeNode key={child.iri} node={child} onSelect={onSelect} />
          ))}
        </CollapsiblePanel>
      )}
    </div>
  )
}

export default DiseaseHierarchy