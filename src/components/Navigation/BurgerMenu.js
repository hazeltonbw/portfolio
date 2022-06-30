import styled from "styled-components";
import { elastic } from "react-burger-menu";
export const burgerStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "39px",
    top: "25px",
  },
  bmBurgerBars: {
    background: "#518dff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "rgb(50,50,50)",
    width: "100%",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    borderRadius: ".5rem",
  },
  bmMorphShape: {
    fill: "rgba(39,39,39, 0.5)",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "5px",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export const Menu = styled(elastic)``;
export const MenuWrapper = styled.div`
  display: none;
  @media (max-width: 640px) {
    & {
      display: block;
    }
  }
`;
