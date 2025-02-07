import styled from "styled-components";

export const animationLoader = styled("div")`
  @keyframes load {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

export const animation = styled("div")`
  @keyframes slide-top-left {
    from {
      transform: translateX(-50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes slide-top-center {
    0% {
      transform: translate(-50%, -100vw);
    }
    100% {
      transform: translate(-50%, 0vw);
    }
  }

  @keyframes slide-top-right {
    from {
      transform: translateX(50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes slide-bottom-left {
    from {
      transform: translateX(-50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes slide-bottom-center {
    from {
      transform: translate(50%, 100vh);
    }
    to {
      transform: translate(50%, 0vh);
    }
  }

  @keyframes slide-bottom-right {
    from {
      transform: translateX(50vh);
    }
    to {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-top-left {
    0% {
      transform: translateX(-50vh);
    }
    50% {
      transform: translateX(5vh);
    }
    70% {
      transform: translateX(-3vh);
    }
    90% {
      transform: translateX(1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-top-center {
    0% {
      transform: translateY(-100vh);
    }
    50% {
      transform: translateY(5vh);
    }
    70% {
      transform: translateY(-3vh);
    }
    90% {
      transform: translateY(2vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes bounce-top-right {
    0% {
      transform: translateX(50vh);
    }
    50% {
      transform: translateX(-5vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-bottom-left {
    0% {
      transform: translateX(-50vh);
    }
    50% {
      transform: translateX(5vh);
    }
    70% {
      transform: translateX(-3vh);
    }
    90% {
      transform: translateX(1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes bounce-bottom-center {
    0% {
      transform: translateY(100vh);
    }
    50% {
      transform: translateY(-5vh);
    }
    70% {
      transform: translateY(3vh);
    }
    90% {
      transform: translateY(-2vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes bounce-bottom-right {
    0% {
      transform: translateX(50vh);
    }
    50% {
      transform: translateX(-5vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-1vh);
    }
    100% {
      transform: translateX(0vh);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(400px) rotateX(-25deg) scale(1);
      animation-timing-function: ease-in;
    }
    50% {
      transform: perspective(400px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: perspective(400px) scale(1);
      animation-timing-function: ease-in;
    }
  }

  @keyframes slide-top-left-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(-50vh);
    }
  }

  @keyframes slide-top-center-reverse {
    0% {
      transform: translate(-50%, 0vw);
    }
    100% {
      transform: translate(-50%, -100vw);
    }
  }

  @keyframes slide-top-right-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(50vh);
    }
  }

  @keyframes slide-bottom-left-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(-50vh);
    }
  }

  @keyframes slide-bottom-center-reverse {
    from {
      transform: translate(50%, 0vh);
    }
    to {
      transform: translate(50%, 100vh);
    }
  }

  @keyframes slide-bottom-right-reverse {
    from {
      transform: translateX(0vh);
    }
    to {
      transform: translateX(50vh);
    }
  }

  @keyframes bounce-top-left-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(5vh);
    }
    70% {
      transform: translateX(1vh);
    }
    90% {
      transform: translateX(-3vh);
    }
    100% {
      transform: translateX(-50vh);
    }
  }

  @keyframes bounce-top-center-reverse {
    0% {
      transform: translateY(0vh);
    }
    50% {
      transform: translateY(2vh);
    }
    70% {
      transform: translateY(-3vh);
    }
    90% {
      transform: translateY(5vh);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  @keyframes bounce-top-right-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(-1vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-5vh);
    }
    100% {
      transform: translateX(50vh);
    }
  }

  @keyframes bounce-bottom-left-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(1vh);
    }
    70% {
      transform: translateX(-3vh);
    }
    90% {
      transform: translateX(5vh);
    }
    100% {
      transform: translateX(-50vh);
    }
  }

  @keyframes bounce-bottom-center-reverse {
    0% {
      transform: translateY(0vh);
    }
    50% {
      transform: translateY(-2vh);
    }
    70% {
      transform: translateY(3vh);
    }
    90% {
      transform: translateY(-5vh);
    }
    100% {
      transform: translateY(100vh);
    }
  }

  @keyframes bounce-bottom-right-reverse {
    0% {
      transform: translateX(0vh);
    }
    50% {
      transform: translateX(-1vh);
    }
    70% {
      transform: translateX(3vh);
    }
    90% {
      transform: translateX(-5vh);
    }
    100% {
      transform: translateX(50vh);
    }
  }

  @keyframes zoom-reverse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  @keyframes flip-reverse {
    0% {
      transform: perspective(400px) scale(1);
      animation-timing-function: ease-in;
    }
    50% {
      transform: perspective(400px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: perspective(400px) rotateX(-25deg) scale(1);
      animation-timing-function: ease-in;
    }
  }
`;
