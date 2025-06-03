# Armazenamento, Backup e Otimização de Consultas – ShowBank

## 📌 Descrição

Este documento descreve práticas fundamentais de **armazenamento de dados**, **backup e restauração**, **monitoramento de desempenho** e **otimização de consultas** em bancos de dados MongoDB, voltadas à infraestrutura da aplicação **ShowBank**. O objetivo é garantir integridade dos dados, recuperação rápida em caso de falha e performance eficiente nas operações de leitura e escrita.

## ✅ Categorias das Ações Utilizadas

### 1. Backup e Restauração de Dados
- Backup completo de banco de dados com `mongodump`
- Backup de coleção específica (`--collection`)
- Exclusão de coleções do backup (`--excludeCollection`)
- Backup compactado com `--gzip`
- Restauração com `mongorestore`

### 2. Mecanismos de Armazenamento
- Utilização do mecanismo `WiredTiger` (padrão)
- Uso opcional do mecanismo `inMemory` (somente versão enterprise)
- Armazenamento de arquivos com GridFS via `mongofiles`

### 3. Monitoramento e Diagnóstico
- Monitoramento em tempo real com `mongostat`
- Exportação dos dados de monitoramento para arquivo
- Análise do status geral do servidor (`db.serverStatus()`)
- Estatísticas detalhadas de uma coleção (`db.Pedidos.stats()`)
- Listagem de operações em execução (`db.currentOp()`)
- Encerramento de operações em andamento (`db.killOp()`)

### 4. Otimização de Consultas
- Inspeção da execução de consultas com `.explain()`
- Criação de índices simples para colunas com maior uso em filtros
- Criação de índices compostos para acelerar múltiplas condições em consultas

## 📄 Funcionalidades Implementadas

### 💾 Backup e Armazenamento
- Backups completos ou seletivos de bancos de dados.
- Geração de arquivos compactados para economia de espaço.
- Restauração confiável e flexível de dados em ambiente de teste ou produção.
- Armazenamento de arquivos grandes no banco de dados utilizando GridFS.

### 🔍 Monitoramento
- Acompanhamento em tempo real do desempenho da instância do MongoDB.
- Análise detalhada de coleções e operações de leitura/gravação.
- Capacidade de encerrar operações que estejam causando lentidão ou travamento.

### 🚀 Otimização de Consultas
- Inspeção das etapas de execução interna do MongoDB para cada consulta.
- Criação de índices simples e compostos para melhorar a velocidade das buscas.
- Análise de planos de execução para ajustar estruturas e consultas.
