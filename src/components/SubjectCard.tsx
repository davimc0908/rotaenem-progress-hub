import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  topics: string[];
  description: string;
  color: string;
}

export default function SubjectCard({ title, icon: Icon, topics, description, color }: SubjectCardProps) {
  return (
    <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gradient-card-hover border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Principais temas:</h4>
          <ul className="space-y-1">
            {topics.slice(0, 4).map((topic, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {topic}
              </li>
            ))}
          </ul>
          {topics.length > 4 && (
            <p className="text-xs text-primary font-medium">+{topics.length - 4} temas</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}