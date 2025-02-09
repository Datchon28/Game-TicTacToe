import { winnerBy } from "../constants/list-prop";

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
    return winnerBy.WinnerColumn;
  } else if (
    children[childrenIndex + 1] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex + 1]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 4]?.use &&
    children[childrenIndex + 1]?.use === children[childrenIndex + 5]?.use
  ) {
    return winnerBy.WinnerRowBlock;
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
    return winnerBy.WinnerColumn;
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
    return winnerBy.WinnerColumnBlock;
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
    return winnerBy.WinnerDiagonalRowPlus;
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
    return winnerBy.WinnerDiagonalRowPlusBlock;
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
    return winnerBy.WinnerRow;
  } else if (
    children[childrenIndex - 1] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex - 1]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 4]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 5]?.use
  ) {
    return winnerBy.WinnerRowBlock;
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
    return winnerBy.WinnerColumn;
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
    return winnerBy.WinnerDiagonalRowMinus;
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
    return winnerBy.WinnerRow;
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
    return winnerBy.WinnerColumn;
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
    return winnerBy.WinnerDiagonalRowMinus;
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
    return winnerBy.WinnerRow;
  } else if (
    children[childrenIndex - 1] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex - 1]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 2]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 3]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 4]?.use &&
    children[childrenIndex - 1]?.use === children[childrenIndex - 5]?.use
  ) {
    return winnerBy.WinnerRowBlock;
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
    return winnerBy.WinnerColumn;
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
    return winnerBy.WinnerColumnBlock;
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
    return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerRow;
    }
  } else if (childrenIndex < children.length - 4) {
    if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex + 4] === null &&
      children[childrenIndex - 1] === null
    ) {
      return winnerBy.WinnerRow;
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex - 1] !== null &&
      children[childrenIndex - 1] !== children[childrenIndex]?.use
    ) {
      return winnerBy.WinnerRowBlock;
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex + 5] !== null &&
      children[childrenIndex]?.use !== children[childrenIndex + 5]?.use
    ) {
      return winnerBy.WinnerRowBlock;
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
    return winnerBy.WinnerColumn;
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
    return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
      return winnerBy.WinnerDiagonalRowMinus;
    } else if (
      children[childrenIndex]?.use ===
        parent[parentIndex + 1][childrenIndex - 1]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 2][childrenIndex - 2]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 3][childrenIndex - 3]?.use &&
      children[childrenIndex]?.use ===
        parent[parentIndex + 4][childrenIndex - 4].use &&
      parent[parentIndex + 5][childrenIndex - 5] !== null &&
      children[childrenIndex]?.use !==
        parent[parentIndex + 5][childrenIndex - 5]?.use
    ) {
      return winnerBy.WinnerDiagonalRowMinusBlock;
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
    return winnerBy.WinnerRow;
  } else if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
    children[childrenIndex + 5] !== null &&
    children[childrenIndex]?.use !== children[childrenIndex + 5]?.use
  ) {
    return winnerBy.WinnerRowBlock;
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
      return winnerBy.WinnerColumn;
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
      return winnerBy.WinnerColumn;
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
      return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
    return winnerBy.WinnerRow;
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
      return winnerBy.WinnerColumn;
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
      return winnerBy.WinnerColumn;
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
      return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
      return winnerBy.WinnerRow;
    }
  } else if (childrenIndex < children.length - 4) {
    if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex + 4] === null &&
      children[childrenIndex - 1] === null
    ) {
      return winnerBy.WinnerRow;
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex - 1] !== null &&
      children[childrenIndex]?.use !== children[childrenIndex - 1]?.use
    ) {
      return winnerBy.WinnerRowBlock;
    } else if (
      children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
      children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
      children[childrenIndex + 5] !== null &&
      children[childrenIndex]?.use !== children[childrenIndex + 5]?.use
    ) {
      return winnerBy.WinnerRowBlock;
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
    return winnerBy.WinnerColumn;
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
    return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
    return winnerBy.WinnerRow;
  } else if (
    children[childrenIndex - 1] !== null &&
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 4]?.use
  ) {
    return winnerBy.WinnerRowBlock;
  } else if (
    children[childrenIndex]?.use === children[childrenIndex + 1]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 2]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 3]?.use &&
    children[childrenIndex]?.use === children[childrenIndex + 4]?.use &&
    children[childrenIndex + 5] !== null &&
    children[childrenIndex - 1] === null
  ) {
    return winnerBy.WinnerRowBlock;
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
      return winnerBy.WinnerColumn;
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
      return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerColumnBlock;
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
      return winnerBy.WinnerDiagonalRowPlus;
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
      return winnerBy.WinnerDiagonalRowPlusBlock;
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
      return winnerBy.WinnerDiagonalRowPlusBlock;
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
      return winnerBy.WinnerDiagonalRowMinus;
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
      return winnerBy.WinnerDiagonalRowMinusBlock;
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
      return winnerBy.WinnerDiagonalRowMinusBlock;
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
