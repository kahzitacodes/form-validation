import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, LoginContainer, Spacing, Title } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { defaultValues, IFormLogin } from "./types";

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')
}).required();

export default function Login() {

    const {
        control,
        formState: { errors, isValid }
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues,
        reValidateMode: "onChange"
    });

    console.log(isValid);

    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>

                <Spacing />

                <Input
                    control={control}
                    name="email"
                    type="email"
                    placeholder="Email"
                    errorMessage={errors.email?.message}
                />
                <Spacing />
                <Input
                    control={control}
                    name="password"
                    type="password"
                    placeholder="Senha"
                    errorMessage={errors.password?.message}
                />
                <Spacing />

                <Button label="Entrar" />

            </LoginContainer>
        </Container>
    );
};
