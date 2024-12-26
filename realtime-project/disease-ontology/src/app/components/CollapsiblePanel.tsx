import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface CollapsiblePanelProps {
  title: string
  children: React.ReactNode
}

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="ml-2 mb-1 w-64">
      <CardHeader className="flex items-center p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-0 h-6 w-6"
        >
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </Button>
        <CardTitle className="flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          {title}
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent className="p-2">
          {children}
        </CardContent>
      )}
    </Card>
  )
}

export default CollapsiblePanel