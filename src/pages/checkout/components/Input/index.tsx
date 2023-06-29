
export const Input = () => {
    return (
        <form className="form">
          <input className="cep" type="number" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div className="row">
          <input className="number" type="number" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          </div>
          <div className="row2">
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input className="uf" type="text" placeholder="UF" />
          </div>
        </form>
    )
}