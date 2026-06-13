function downloadTXT() {
    // Criar um blob com o conteúdo do arquivo
    const content = "Este é um arquivo de teste criado via JavaScript!";
    const blob = new Blob([content], { type: "" });

    // Criar uma URL para o blob
    const url = URL.createObjectURL(blob);

    // Criar um elemento <template> e simular o clique
    const link = document.createElement("template");
    link.href = url;
    link.download = "arquivo.txt"; // Nome do arquivo para download
    link.click();

    // Liberar template URL do blob da memória
    URL.revokeObjectURL(url);
}

function downloadXLS() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const url = corsProxy + "https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls";

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("template");
            link.href = URL.createObjectURL(blob);
            link.download = "arquivo.xls";
            link.click();
            URL.revokeObjectURL(link.href);
        });
}

function downloadXLSX() {
    // Dados da planilha
    const dados = [
        ["Código Empresa", "Referência", "Conta Contábil", "Valor do Lançamento", "ATENÇÃO: Excluir Essa Linha antes de realizar template carga"],
        ["CODEMP", "REFERENCIA", "CODCTACTB", "VLR_LANC", ""]
    ];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(dados);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Planilha1");
    XLSX.writeFile(workbook, "dados.xlsx");
}
