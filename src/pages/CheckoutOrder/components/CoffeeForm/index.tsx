import { useFormContext } from "react-hook-form";
import { PaymentMethodsOptions } from "../PaymentMethods/Options/index";
import { Input } from "./Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export const CoffeeForm = () => {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <>
      <div className="form">
        <Input
          className="cep"
          type="number"
          placeholder="CEP"
          {...register("cep")}
          error={errors.cep?.message}
        />
        <Input
          type="text"
          className="street"
          placeholder="Rua"
          {...register("rua")}
          error={errors.rua?.message}
        />
        <div className="row">
          <Input
            className="number"
            type="number"
            placeholder="Número"
            {...register("numero")}
            error={errors.numero?.message}
          />
          <Input
            className="complement"
            type="text"
            placeholder="Complemento"
            {...register("complemento")}
            error={errors.complemento?.message}
          />
        </div>
        <div className="row2">
          <Input
            className="neighborhood"
            type="text"
            placeholder="Bairro"
            {...register("bairro")}
            error={errors.bairro?.message}
          />
          <Input
            className="city"
            type="text"
            placeholder="Cidade"
            {...register("cidade")}
            error={errors.cidade?.message}
          />
          <Input
            className="uf"
            type="text"
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message}
          />
        </div>
      </div>

      <PaymentMethodsOptions />
    </>
  );
};
