import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

function TreeNode({ node, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className="ml-4">
      <div className="flex items-center">
        {hasChildren && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="mr-1">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
        <span>{node.label}</span>
      </div>
      {isExpanded && hasChildren && (
        <div className="ml-4">
          {node.children.map((child) => (
            <TreeNode key={child.iri} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function DiseaseHierarchy({ hierarchy }) {
  return (
    <div className="mt-4">
      {hierarchy.parents.length > 0 && (
        <div>
          <h4 className="font-semibold">Parents</h4>
          {hierarchy.parents.map((parent) => (
            <TreeNode key={parent.iri} node={parent} />
          ))}
        </div>
      )}
      <div>
        <h4 className="font-semibold mt-2">Current Disease</h4>
        <TreeNode node={hierarchy} />
      </div>
      {hierarchy.children.length > 0 && (
        <div>
          <h4 className="font-semibold mt-2">Children</h4>
          {hierarchy.children.map((child) => (
            <TreeNode key={child.iri} node={child} />
          ))}
        </div>
      )}
    </div>
  )
}

