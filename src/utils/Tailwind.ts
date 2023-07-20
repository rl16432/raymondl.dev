export type ClassModifiers = {
  [key: string]: (string | ClassModifiers)[];
};

export const computeClassName = (modifiers: ClassModifiers) => {
  const classes: string[] = [];

  const scanObject = (obj: ClassModifiers, currClass: string): string => {
    let newClass = currClass;
    Object.entries(obj).forEach(([tag, mods]) => {
      mods.forEach((mod) => {
        if (typeof mod === 'string') {
          newClass = `${tag}:${currClass}:${mod}`;
        } else {
          newClass = scanObject(mod, newClass);
        }
      });
    });
    return newClass;
  };

  Object.entries(modifiers).forEach(([tag, mods]) => {
    mods.forEach((mod) => {
      if (typeof mod === 'string') {
        classes.push(`${tag}:${mod}`);
      } else {
        classes.push(scanObject(mod, tag));
      }
    });
  });

  return classes.join(' ');
};
