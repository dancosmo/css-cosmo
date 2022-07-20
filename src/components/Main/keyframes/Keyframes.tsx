import { keyframes } from "styled-components";

export const circular = keyframes`
0% {
transform: rotate(0deg) translate(-75px) rotate(0deg);
}
100% {
transform: rotate(360deg) translate(-75px) rotate(-360deg);
}
`
export const vertical = keyframes`
    0%{
        transform: translateY(-75px);
    }
    25%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(75px);
    }
    75%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(-75px);
    }
`