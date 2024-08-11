document.getElementById("btnAdicionarAluno").addEventListener("click", function() {
    console.log("Botão clicado");

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;

    if (!nome || !email || !endereco) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const listaAlunos = document.getElementById("listaAlunos");
    const itemLista = document.createElement("li");
    itemLista.textContent = nome;
    listaAlunos.appendChild(itemLista);

    document.getElementById("formAluno").reset();
});

function mudou(){
    alert('oi')
}

document.getElementById("btnAdicionarProfessor").addEventListener("click", function() {
    const nomeProfessor = document.getElementById("nomeProfessor").value;
    const diasAulas = document.getElementById("diasAulas").value;
    const cargaHoraria = document.getElementById("cargaHoraria").value;
    const contato = document.getElementById("contato").value;

    if (!nomeProfessor || !diasAulas || !cargaHoraria || !contato) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const listaProfessores = document.getElementById("listaProfessores");
    const itemLista = document.createElement("li");
    itemLista.textContent = nomeProfessor + ", Dias de Aulas: " + diasAulas + ", Carga Horária: " + cargaHoraria + ", Contato: " + contato;
    listaProfessores.appendChild(itemLista);

    document.getElementById("formProfessor").reset();

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.open();
    janelaImpressao.document.write('<pre>' + itemLista.textContent + '</pre>');
    janelaImpressao.document.close();
    janelaImpressao.print();
});
document.getElementById("btnLancarNota").addEventListener("click", function() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Por favor, insira todas as notas.");
        return;
    }

    const notaTotal = nota1 + nota2 + nota3 + nota4;
    const percentualProgresso = (notaTotal / 40) * 100; // assumindo que a nota máxima para cada entrada é 10

    const progressoNotas = document.getElementById("progressoNotas");
    progressoNotas.style.width = percentualProgresso + "%";
    progressoNotas.textContent = percentualProgresso + "%";
});

const frequenciaTotal = 120;

document.getElementById("btnLancarFrequencia").addEventListener("click", function() {
    let frequenciaAcumulada = 0;

    for (let i = 1; i <= 10; i++) {
        const frequenciaSemanal = parseInt(document.getElementById("semana" + i).value);

        if (isNaN(frequenciaSemanal)) {
            alert("Por favor, insira a frequência da semana " + i + ".");
            return;
        }

        if (frequenciaSemanal < 0 || frequenciaSemanal > 12) {
            alert("Por favor, insira um valor válido para a frequência da semana " + i + ".");
            return;
        }

        frequenciaAcumulada += frequenciaSemanal;
    }

    const percentualProgresso = (frequenciaAcumulada / frequenciaTotal) * 100;

    const progressoFrequencia = document.getElementById("progressoFrequencia");
    progressoFrequencia.style.width = percentualProgresso + "%";

    if (percentualProgresso < 30) {
        progressoFrequencia.style.backgroundColor = "red";
        progressoFrequencia.textContent = "Reprovado(a) - " + percentualProgresso.toFixed(2) + "%";
    } else {
        progressoFrequencia.style.backgroundColor = "green";
        progressoFrequencia.textContent = percentualProgresso.toFixed(2) + "%";
    }
});