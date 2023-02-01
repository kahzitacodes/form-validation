import { ButtonStyle } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ label, onClick }: IButtonProps) => {
    return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;
