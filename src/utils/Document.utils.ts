import React, { isValidElement } from "react";

export const scrollToElementWithOffset = (id: string, offset: number = 100) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

/**
 * Checks if a sidebar item has a currently active page
 * 
 * @param children 
 * @param currentPath 
 * @returns true when a child is active, otherwise false
 */
export const hasActiveChild = (children: React.ReactNode, currentPath: string): boolean => {
  let found = false;

  React.Children.forEach(children, (child) => {
      if (found) return;

      if (isValidElement(child)) {
          const childProps = child.props as { path?: string; children?: React.ReactNode };

          if (childProps?.path && childProps.path === currentPath) {
              found = true;
          } else if (childProps?.children) {
              found = hasActiveChild(childProps.children, currentPath);
          }
      }
  });

  return found;
};