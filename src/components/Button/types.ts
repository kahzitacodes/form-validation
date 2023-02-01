export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}