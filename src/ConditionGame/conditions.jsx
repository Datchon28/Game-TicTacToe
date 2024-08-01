const conditionOuterMostTopLeft = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex + 4] === null
  ) {
    return "Winner Row";
  } else if (
    children[childrenIndex + 1] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex + 1]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 4]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 5]?.use
  ) {
    return "Winner Row Block";
  }

  // Hang Doc
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex + 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex]?.use &&
    parent[parentIndex + 4][childrenIndex] === null
  ) {
    return "Winner Column";
  } else if (
    parent[parentIndex + 1][childrenIndex] !== null &&
    children[childrenIndex]?.use !==
      parent[parentIndex + 1][childrenIndex]?.use &&
    parent[parentIndex + 1][childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex]?.use &&
    parent[parentIndex + 1][childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex]?.use &&
    parent[parentIndex + 1][childrenIndex]?.use ===
      parent[parentIndex + 4][childrenIndex]?.use &&
    parent[parentIndex + 1][childrenIndex]?.use ===
      parent[parentIndex + 5][childrenIndex]?.use
  ) {
    return "Winner Column Block";
  }

  // Hang Cheo Tien
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex + 1][childrenIndex + 1]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex + 2]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex + 3]?.use &&
    parent[parentIndex + 4][childrenIndex + 4] === null
  ) {
    return "Winner Diagonal Row Plus";
  } else if (
    parent[parentIndex + 1][childrenIndex + 1] !== null &&
    children[childrenIndex]?.use !==
      parent[parentIndex + 1][childrenIndex + 1]?.use &&
    parent[parentIndex + 1][childrenIndex + 1]?.use ===
      parent[parentIndex + 2][childrenIndex + 2]?.use &&
    parent[parentIndex + 1][childrenIndex + 1]?.use ===
      parent[parentIndex + 3][childrenIndex + 3]?.use &&
    parent[parentIndex + 1][childrenIndex + 1]?.use ===
      parent[parentIndex + 4][childrenIndex + 4]?.use &&
    parent[parentIndex + 1][childrenIndex + 1]?.use ===
      parent[parentIndex + 5][childrenIndex + 5]?.use
  ) {
    return "Winner Diagonal Row Plus Block";
  }

  return null;
};

const conditionOuterMostTopRight = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex - 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 4] === null
  ) {
    return "Winner Row";
  } else if (
    children[childrenIndex - 1] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex - 1]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 4]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 5]?.use
  ) {
    return "Winner Row Block";
  }

  // Hang Doc
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex + 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex]?.use &&
    parent[parentIndex + 4][childrenIndex] === null
  ) {
    return "Winner Column";
  }

  // Hang Cheo Tien
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex + 1][childrenIndex - 1]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex - 2]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex - 3]?.use &&
    parent[parentIndex + 4][childrenIndex - 4] === null
  ) {
    return "Winner Diagonal Row Minus";
  }

  return null;
};

const conditionOuterMostBottomLeft = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex + 4] === null
  ) {
    return "Winner Row";
  }

  // Hang Doc
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex - 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex]?.use &&
    parent[parentIndex - 4][childrenIndex] === null
  ) {
    return "Winner Column";
  }

  // Hang Cheo Lui
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex - 1][childrenIndex + 1]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex + 2]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex + 3]?.use &&
    parent[parentIndex - 4][childrenIndex + 4] === null
  ) {
    return "Winner Diagonal Row Minus";
  }

  return null;
};

const conditionOuterMostBottomRight = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex - 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 4] === null
  ) {
    return "Winner Row";
  } else if (
    children[childrenIndex - 1] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex - 1]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 4]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 5]?.use
  ) {
    return "Winner Row Block";
  }

  // Hang Doc
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex - 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex]?.use &&
    parent[parentIndex - 4][childrenIndex] === null
  ) {
    return "Winner Column";
  } else if (
    parent[parentIndex - 1][childrenIndex] !== null &&
    children[childrenIndex]?.use !==
      parent[parentIndex - 1][childrenIndex]?.use &&
    parent[parentIndex - 1][childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex]?.use &&
    parent[parentIndex - 1][childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex]?.use &&
    parent[parentIndex - 1][childrenIndex]?.use ===
      parent[parentIndex - 4][childrenIndex]?.use &&
    parent[parentIndex - 1][childrenIndex]?.use ===
      parent[parentIndex - 5][childrenIndex]?.use
  ) {
    return "Winner Column Block";
  }

  // Hang Cheo Tien
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex - 1][childrenIndex - 1]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex - 2]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex - 3]?.use &&
    parent[parentIndex - 4][childrenIndex - 4] === null
  ) {
    return "Winner Diagonal Row Plus";
  }

  return null;
};

const conditionOuterMostTopFree = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (childrenIndex === children.length - 4) {
    if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex - 1] === null
    ) {
      return "Winner Row";
    }
  } else if (childrenIndex < children.length - 4) {
    if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex + 4] === null &&
      children[childrenIndex - 1] === null
    ) {
      return "Winner Row";
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex - 1] !== null &&
      children[childrenIndex - 1] !== children[childrenIndex]?.use
    ) {
      return "Winner Row Block";
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex + 5] !== null &&
      children[childrenIndex]?.use !== children[childrenIndex + 5]?.use
    ) {
      return "Winner Row Block";
    }
  }

  // Hang Doc
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex + 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex]?.use &&
    parent[parentIndex + 4][childrenIndex] === null
  ) {
    return "Winner Column";
  } else if (
    children[childrenIndex]?.use ===
      parent[parentIndex + 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 3][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex + 4][childrenIndex]?.use &&
    parent[parentIndex + 5][childrenIndex] !== null &&
    children[childrenIndex]?.use !== parent[parentIndex + 5][childrenIndex]?.use
  ) {
    return "Winner Column Block";
  }

  // Hang Cheo Tien
  if (childrenIndex === children.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use
    ) {
      return "Winner Diagonal Row Plus";
    }
  } else if (childrenIndex < children.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use &&
      parent[parentIndex + 4][childrenIndex + 4] === null
    ) {
      return "Winner Diagonal Row Plus";
    }
  }

  // Hang Cheo Lui
  if (childrenIndex === 3) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use
    ) {
      return "Winner Diagonal Row Minus";
    }
  } else if (childrenIndex > 3) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use &&
      parent[parentIndex + 4][childrenIndex - 4] === null
    ) {
      return "Winner Diagonal Row Minus";
    }
  }

  return null;
};

const conditionOuterMostLeftFree = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex + 4] === null
  ) {
    return "Winner Row";
  } else if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
    children[childrenIndex + 5] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex + 5]?.use
  ) {
    return "Winner Row Block";
  }

  // Hang Doc
  if (parentIndex === parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      parent[parentIndex - 1][childrenIndex] === null
    ) {
      return "Winner Column";
    }
  } else if (parentIndex < parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      parent[parentIndex + 4][childrenIndex] === null &&
      parent[parentIndex - 1][childrenIndex] === null
    ) {
      return "Winner Column";
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex]?.use &&
      parent[parentIndex - 1][childrenIndex] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex - 1][childrenIndex]?.use
    ) {
      return "Winner Column Block";
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex]?.use &&
      parent[parentIndex + 5][childrenIndex] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex + 5][childrenIndex]?.use
    ) {
      return "Winner Column Block";
    }
  }

  // Hang Cheo Tien
  if (parentIndex === parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use
    ) {
      return "Winner Diagonal Row Plus";
    }
  } else if (parentIndex < parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use &&
      parent[parentIndex + 4][childrenIndex + 4] === null
    ) {
      return "Winner Diagonal Row Plus";
    }
  }

  // Hang Cheo Lui
  if (parentIndex >= 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex - 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 3][childrenIndex + 3]?.use &&
      parent[parentIndex - 4][childrenIndex + 4] === null
    ) {
      return "Winner Diagonal Row Minus";
    }
  }

  return null;
};

const conditionOuterMostRightFree = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex - 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 4] === null
  ) {
    return "Winner Row";
  }

  // Hang Doc
  if (parentIndex === parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      parent[parentIndex - 1][childrenIndex] === null
    ) {
      return "Winner Column";
    }
  } else if (parentIndex < parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      parent[parentIndex + 4][childrenIndex] === null &&
      parent[parentIndex - 1][childrenIndex] === null
    ) {
      return "Winner Column";
    } else if (
      parent[parentIndex - 1][childrenIndex] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex - 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex]?.use
    ) {
      return "Winner Column Block";
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex]?.use &&
      parent[parentIndex + 5][childrenIndex] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex + 5][childrenIndex]?.use
    ) {
      return "Winner Column Block";
    }
  }

  // Hang Cheo Tien
  if (parentIndex >= 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex - 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 3][childrenIndex - 3]?.use &&
      parent[parentIndex - 4][childrenIndex - 4] === null
    ) {
      return "Winner Diagonal Row Plus";
    }
  }

  // Hang Cheo Lui
  if (parentIndex === parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use
    ) {
      return "Winner Diagonal Row Minus";
    }
  } else if (parentIndex < parent.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use &&
      parent[parentIndex + 4][childrenIndex - 4] === null
    ) {
      return "Winner Diagonal Row Minus";
    }
  }

  return null;
};

const conditionOuterMostBottomFree = (
  parent,
  children,
  parentIndex,
  childrenIndex
) => {
  // Hang Ngang
  if (childrenIndex === children.length - 4) {
    if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex - 1] === null
    ) {
      return "Winner Row";
    }
  } else if (childrenIndex < children.length - 4) {
    if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex + 4] === null &&
      children[childrenIndex - 1] === null
    ) {
      return "Winner Row";
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex - 1] !== null &&
      children[childrenIndex]?.use !== children[childrenIndex - 1]?.use
    ) {
      return "Winner Row Block";
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex + 5] !== null &&
      children[childrenIndex]?.use !== children[childrenIndex + 5]?.use
    ) {
      return "Winner Row Block";
    }
  }

  // Hang Doc
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex - 1][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex]?.use &&
    parent[parentIndex - 4][childrenIndex] === null
  ) {
    return "Winner Column";
  }

  // Hang Cheo Tien
  if (
    children[childrenIndex]?.use ===
      parent[parentIndex - 1][childrenIndex - 1]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 2][childrenIndex - 2]?.use &&
    children[childrenIndex]?.use ===
      parent[parentIndex - 3][childrenIndex - 3]?.use &&
    parent[parentIndex - 4][childrenIndex - 4] === null
  ) {
    return "Winner Diagonal Row Plus";
  }

  // Hang Cheo Lui
  if (childrenIndex === children.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex - 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 3][childrenIndex + 3]?.use
    ) {
      return "Winner Diagonal Row Minus";
    }
  } else if (childrenIndex < children.length - 4) {
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex - 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex - 3][childrenIndex + 3]?.use &&
      parent[parentIndex - 4][childrenIndex + 4] === null
    ) {
      return "Winner Diagonal Row Minus";
    }
  }

  return null;
};

const conditionAllFree = (parent, children, parentIndex, childrenIndex) => {
  // Hang Ngang
  if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex + 4] === null &&
    children[childrenIndex - 1] === null
  ) {
    return "Winner Row";
  } else if (
    children[childrenIndex - 1] !== null &&
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 4]?.use
  ) {
    return "Winner Row Block";
  } else if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
    children[childrenIndex + 5] !== null &&
    children[childrenIndex - 1] === null
  ) {
    return "Winner Row Block";
  }

  if (parentIndex < parent.length - 4) {
    // Hang Doc
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      parent[parentIndex + 4][childrenIndex] === null &&
      parent[parentIndex - 1][childrenIndex] === null
    ) {
      return "Winner Column";
    } else if (
      parent[parentIndex - 1][childrenIndex] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex - 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex]?.use
    ) {
      return "Winner Column Block";
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex]?.use &&
      parent[parentIndex + 5][childrenIndex] !== null &&
      children[childrenIndex]?.use !== parent[parentIndex + 5][childrenIndex]
    ) {
      return "Winner Column Block";
    }

    // Hang Cheo Tien
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use &&
      parent[parentIndex + 4][childrenIndex + 4] === null &&
      parent[parentIndex - 1][childrenIndex - 1] === null
    ) {
      return "Winner Diagonal Row Plus";
    } else if (
      parent[parentIndex - 1][childrenIndex - 1] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex - 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex + 4]?.use
    ) {
      return "Winner Diagonal Row Plus Block";
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex + 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex + 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex + 3]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex + 4]?.use &&
      parent[parentIndex + 5][childrenIndex + 5] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex + 5][childrenIndex + 5]?.use
    ) {
      return "Winner Diagonal Row Plus Block";
    }

    // Hang Cheo Lui
    if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use &&
      parent[parentIndex + 4][childrenIndex - 4] === null &&
      parent[parentIndex - 1][childrenIndex + 1] === null
    ) {
      return "Winner Diagonal Row Minus";
    } else if (
      parent[parentIndex - 1][childrenIndex + 1] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex - 1][childrenIndex + 1] &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex - 4]?.use
    ) {
      return "Winner Diagonal Row Minus Block";
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex - 4]?.use &&
      parent[parentIndex + 5][childrenIndex - 5] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex + 5][childrenIndex - 5]?.use
    ) {
      return "Winner Diagonal Row Minus Block";
    }
  }

  return null;
};

export default {
  conditionOuterMostTopLeft,
  conditionOuterMostTopRight,
  conditionOuterMostBottomLeft,
  conditionOuterMostBottomRight,
  conditionOuterMostTopFree,
  conditionOuterMostLeftFree,
  conditionOuterMostRightFree,
  conditionOuterMostBottomFree,
  conditionAllFree,
};
