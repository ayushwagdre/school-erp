import { useState } from 'react';
import { cn } from '../../lib/utils';

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={cn("w-full", className)}>
      {children({ activeTab, setActiveTab })}
    </div>
  );
}

export function TabsList({ children, className }) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, activeTab, setActiveTab, children, className }) {
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-600 hover:text-gray-900",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children, className }) {
  if (value !== activeTab) return null;

  return (
    <div
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        className
      )}
    >
      {children}
    </div>
  );
}
