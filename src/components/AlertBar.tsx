export function AlertBar() {
  return (
    <div className="w-full py-3 px-4 border-b" style={{ backgroundColor: "rgb(27,45,79)", borderColor: "rgba(255,255,255,0.1)" }}>
      <p className="text-center text-sm font-medium" style={{ color: "#D4AA40" }}>
        ⚠️ <strong>Atenção:</strong> Após a apreensão do veículo, você tem <strong>5 dias</strong> para agir.{" "}
        <a
          href="https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos."
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer hover:opacity-80 transition-opacity"
        >
          Não perca esse prazo.
        </a>
      </p>
    </div>
  );
}
