export const line1Animation = {
  inactive: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  active: {
    rotate: 45,
    y: 15,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    }
  }
};

export const line2Animation = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  active: {
    opacity: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      ease: "easeOut",
    }
  }
};

export const line3Animation = {
  inactive: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  active: {
    rotate: -45,
    y: -15,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    }
  }
};


export const dropDown = {
  inactive: {
    x: 2500,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  active: {
    x: 0, 
    transition: {
    duration: 0.75,
    ease: "easeOut",
    },
  }
};
