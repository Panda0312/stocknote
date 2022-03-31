import styled from "styled-components"

export const StickyStyles = styled.div`
.table {
  box-sizing: border-box;
  border: 1px solid #ddd;
  .resizer {
    display: inline-block;
    background: blue;
    width: 10px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    ${'' /* prevents from scrolling while dragging on touch devices */}
    touch-action:none;

    &.isResizing {
      background: red;
    }
  }
  .tr {
    :last-child {
      .td {
        border-bottom: 0;
      }
    }
  }
  .th,
  .td {
    padding: 5px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: #fff;
    overflow: hidden;
    :last-child {
      border-right: 0;
    }
  }
  &.sticky {
    overflow: auto;
    .header,
    .footer {
      position: sticky;
      z-index: 1;
    }
    .header {
      top: 0;
      box-shadow: 0px 3px 3px #ccc;
    }
    .footer {
      bottom: 0;
      box-shadow: 0px -3px 3px #ccc;
    }
    .body {
      position: relative;
      z-index: 0;
    }
    [data-sticky-td] {
      position: sticky;
    }
    [data-sticky-last-left-td] {
      box-shadow: 2px 0px 3px #ccc;
    }
    [data-sticky-first-right-td] {
      box-shadow: -2px 0px 3px #ccc;
    }
  }
}
`