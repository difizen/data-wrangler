import { FONT_FAMILY, S2Theme } from "@antv/s2";

const BORDER_COLOR = "rgb(39, 44, 65)";
const BACK_COLOR = "rgb(67, 72, 91)";
const HEADER_BACK_COLOR = "#353c59";
const CELL_ACTIVE_BACK_COLOR = "#434c6c";
const CELL_ACTIVE_BACK_BORDER_COLOR = "#0970f5";

export const customTheme: S2Theme = {
  background: {
    color: HEADER_BACK_COLOR,
    opacity: 0,
  },
  cornerCell: {
    cell: {
      horizontalBorderColor: BORDER_COLOR,
      verticalBorderColor: BORDER_COLOR,
      padding: {
        top: 12,
        right: 8,
        bottom: 12,
        left: 8,
      },
      backgroundColor: HEADER_BACK_COLOR,
    },
    text: {
      fill: "#fff",
    },
    bolderText: {
      fill: "#fff",
      opacity: 0.4,
    },
  },
  splitLine: {
    horizontalBorderColor: BORDER_COLOR,
    horizontalBorderColorOpacity: 1,
    horizontalBorderWidth: 2,
    verticalBorderColor: BORDER_COLOR,
    verticalBorderColorOpacity: 1,
    verticalBorderWidth: 2,
    showShadow: true,
    shadowWidth: 10,
    shadowColors: {
      left: "rgba(0,0,0,0.1)",
      right: "rgba(0,0,0,0)",
    },
  },
  colCell: {
    cell: {
      horizontalBorderColor: BORDER_COLOR,
      verticalBorderColor: BORDER_COLOR,
      verticalBorderWidth: 2,
      horizontalBorderWidth: 2,
      padding: {
        top: 12,
        right: 8,
        bottom: 12,
        left: 8,
      },
      backgroundColor: HEADER_BACK_COLOR,
      interactionState: {
        hover: {
          backgroundColor: CELL_ACTIVE_BACK_COLOR,
          backgroundOpacity: 1,
        },
        selected: {
          backgroundColor: "rgb(63, 69, 97)",
        },
      },
    },
    text: {
      fill: "#fff",
    },
    bolderText: {
      fill: "#fff",
      opacity: 0.4,
    },
  },
  dataCell: {
    icon: {
      size: 14,
      margin: {
        left: 10,
      },
    },
    cell: {
      interactionState: {
        hover: {
          backgroundColor: CELL_ACTIVE_BACK_COLOR,
          backgroundOpacity: 1,
        },
        hoverFocus: {
          backgroundColor: CELL_ACTIVE_BACK_COLOR,
          backgroundOpacity: 1,
          borderColor: CELL_ACTIVE_BACK_BORDER_COLOR,
        },
        selected: {
          backgroundColor: CELL_ACTIVE_BACK_COLOR,
          backgroundOpacity: 1,
        },
        unselected: {
          backgroundOpacity: 1,
          opacity: 1,
        },
        prepareSelect: {
          borderColor: CELL_ACTIVE_BACK_BORDER_COLOR,
        },
      },
      horizontalBorderColor: BORDER_COLOR,
      verticalBorderColor: BORDER_COLOR,
      verticalBorderWidth: 2,
      horizontalBorderWidth: 2,
      padding: {
        top: 0,
        right: 8,
        bottom: 2,
        left: 0,
      },
      backgroundColorOpacity: 0.9,
      backgroundColor: BACK_COLOR,
      crossBackgroundColor: BACK_COLOR,
    },
    text: {
      fill: "#fff",
    },
  },
};
