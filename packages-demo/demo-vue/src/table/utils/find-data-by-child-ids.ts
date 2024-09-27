const findDataByChildIds = (items, ids) => {
  const result = items.
    map(parent => {
      if (parent.children) {
        const filteredChildren = parent.children.filter(child => ids.some(cond => cond === child.id));

        if (filteredChildren.length > 0) {
          return {
            ...parent,
            children: filteredChildren
          };
        }
      }

      return null;
    }).
    filter(parent => parent !== null);

  return result;
};

export default findDataByChildIds;
