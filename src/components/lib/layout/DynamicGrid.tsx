import React from "react";

interface DynamicGridProps {
  children: React.ReactNode;
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ children }) => {
  const childArray = React.Children.toArray(children);

  const columns: React.ReactNode[][] = [[], [], []];

  childArray.forEach((panel: React.ReactNode, index: number) => {
    columns[index % 3].push(panel);
  });

  return (
    <div className="bg-zinc-900 min-h-full p-6 overflow-y-auto overflow-x-hidden">
      <div className="responsive-row">
        {columns.map((column, colIndex) => (
          <div className="responsive-columns" key={colIndex}>
            {column.map((panel, panelIndex) => (
              <div className={`mb-4`} key={panelIndex}>{panel}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicGrid;
