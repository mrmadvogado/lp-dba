export function AlertBar() {
  return (
    <div className="w-full py-3 px-4 border-b" style={{ backgroundColor: "rgb(27,45,79)", borderColor: "rgba(255,255,255,0.1)" }}>
      <p className="text-center text-sm font-medium" style={{ color: "#D4AA40" }}>
        ⚠️ <strong>Alerta!</strong> Se as prestações do seu veículo estão atrasadas, é hora de agir!{" "}
        <span className="underline cursor-pointer">
          Antes da busca e apreensão há mais oportunidades de solução.
        </span>
      </p>
    </div>
  );
}
