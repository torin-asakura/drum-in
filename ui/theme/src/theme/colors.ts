const colors = {
  button: {
    transparentBackground: {
      default: {
        background: 'transparent',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgb(154,101,242)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgb(154,101,242)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
    },
    transparentBackgroundPurpleText: {
      default: {
        background: 'transparent',
        font: 'rgb(154,101,242)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgb(154,101,242)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgb(154,101,242)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgb(154,101,242)',
        border: 'transparent',
      },
    },
    darkToPurpleBackground: {
      default: {
        background: 'rgb(15, 12, 12)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      hover: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgba(242, 242, 242, 0.5)',
      },
      pressed: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgba(242, 242, 242, 0.5)',
      },
      disabled: {
        background: 'rgba(15, 12, 12, 0.12)',
        font: 'rgba(15, 12, 12, 0.12)',
        border: 'transparent',
      },
    },
    purpleBackground: {
      default: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgb(15, 12, 12)',
      },
      hover: {
        background: 'rgb(15, 12, 12)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      pressed: {
        background: 'rgb(15, 12, 12)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      disabled: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgb(15, 12, 12)',
      },
    },
    whiteBackground: {
      default: {
        background: 'rgb(242,242,242)',
        font: 'rgb(15, 12, 12)',
        border: 'rgb(242,242,242)',
      },
      hover: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      pressed: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      disabled: {
        background: 'rgb(128, 127, 127)',
        font: 'rgba(242, 242, 242, 0.5)',
        border: 'rgb(128, 127, 127)',
      },
    },
    transparentWhiteToPurpleBackground: {
      default: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(242, 242, 242)',
        border: 'transparent',
      },
      hover: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
    },
    transparentWhiteToGrayBackground: {
      default: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(242, 242, 242)',
        border: 'transparent',
      },
      hover: {
        background: 'rgb(128, 127, 127)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgb(128, 127, 127)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgb(128, 127, 127)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
    },
    borderWhiteToWhiteBackground: {
      default: {
        background: 'transparent',
        font: 'rgb(242, 242, 242)',
        border: 'rgb(242, 242, 242)',
      },
      hover: {
        background: 'rgb(242, 242, 242)',
        font: 'rgb(15,12,12)',
        border: 'rgb(242, 242, 242)',
      },
      pressed: {
        background: 'rgb(128, 127, 127)',
        font: 'rgb(15,12,12)',
        border: 'rgb(242, 242, 242)',
      },
      disabled: {
        background: 'rgb(128, 127, 127)',
        font: 'rgb(15,12,12)',
        border: 'rgb(242, 242, 242)',
      },
    },
    transparentWhiteBackgroundWhiteBorder: {
      default: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(242, 242, 242)',
        border: 'rgb(242, 242, 242)',
      },
      hover: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgba(156, 101, 242, 1)',
        border: 'rgba(156, 101, 242, 1)',
      },
      pressed: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(242, 242, 242)',
        border: 'rgb(242, 242, 242)',
      },
      disabled: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(242, 242, 242)',
        border: 'rgb(242, 242, 242)',
      },
    },
    darkToPurpleBackgroundWithWhiteBorder: {
      default: {
        background: 'rgb(15, 12, 12)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      hover: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      pressed: {
        background: 'rgb(156, 101, 242)',
        font: 'rgb(242,242,242)',
        border: 'rgb(242,242,242)',
      },
      disabled: {
        background: 'rgba(15, 12, 12, 0.12)',
        font: 'rgba(15, 12, 12, 0.12)',
        border: 'rgba(15, 12, 12, 0.12)',
      },
    },
    smokyWhiteBackground: {
      default: {
        background: 'transparent',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgb(242,242,242)',
        font: 'rgb(15,12,12)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
    },
    transparentWhiteBackground: {
      default: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(242, 242, 242, 0.15)',
        font: 'rgb(128, 127, 127)',
        border: 'transparent',
      },
    },
    veryTransparentSmokyWhiteBackground: {
      default: {
        background: 'rgba(242, 242, 242, 0.05)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      hover: {
        background: 'rgba(242, 242, 242, 0.05)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      pressed: {
        background: 'rgba(242, 242, 242, 0.05)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
      disabled: {
        background: 'rgba(242, 242, 242, 0.05)',
        font: 'rgb(242,242,242)',
        border: 'transparent',
      },
    },
  },
  text: {
    smokyWhite: 'rgb(242,242,242)',
    transparentSmokyWhite: 'rgba(242, 242, 242, 0.5)',
    veryTransparentSmokyWhite: 'rgba(242, 242, 242, 0.15)',
    blackAmber: 'rgb(15,12,12)',
    gray: 'rgb(128, 127, 127)',
    purple: 'rgb(156, 101, 242)',
    green: 'rgb(18, 195, 142)',
  },
  background: {
    blackAmber: 'rgb(15,12,12)',
    transparentWhite: 'rgba(242, 242, 242, 0.15)',
    veryTransparentSmokyWhite: 'rgba(242, 242, 242, 0.05)',
    smokyWhite: 'rgb(242,242,242)',
    purple: 'rgb(156, 101, 242)',
    green: 'rgb(18, 195, 142)',
  },
  drawer: {
    backdrop: 'rgba(72, 72, 72, 0.6)',
  },
  input: {
    background: 'rgb(242,242,242)',
    font: 'rgb(128, 127, 127)',
    border: 'transparent',
    hover: 'rgb(242,242,242)',
    focus: 'rgb(242,242,242)',
    press: 'rgb(242,242,242)',
    error: 'rgba(226, 29, 29, 1)',
  },
  checkbox: {
    default: {
      background: 'transparent',
      border: 'rgba(242, 242, 242, 0.5)',
    },
    hover: {
      background: 'transparent',
      border: 'rgb(242, 242, 242)',
    },
    disabled: {
      background: 'transparent',
      border: 'rgba(15, 12, 12, 0.12)',
    },
    checked: {
      background: 'rgb(242, 242, 242)',
      border: 'rgb(242, 242, 242)',
      checkmark: 'rgb(15,12,12)',
    },
    checkedHover: {
      background: 'rgb(242, 242, 242)',
      border: 'rgb(242, 242, 242)',
    },
  },
  progressBar: {
    default: 'rgb(128,127,127)',
    progress: 'rgb(242,242,242)',
  },
}

export { colors }
