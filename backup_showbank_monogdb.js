// acessar raíz do diretório C:\Users pela linha de comando
cd ..
cd "Program Files"
cd MongoDB
cd Server
cd Tools
cd bin

// fazer o backup de todo o banco de dados pela linha de comando
mongodump --db=Vendas

// especificar nome da coleção e do diretório em que o backup será realizado
mongodump --collection=Pedidos --db=Vendas --out=C:\Curso

// excluir uma coleção para que ela não seja incluída no backup
mongodump --db=Vendas --excludeCollection=Pedidos --out=C:\Curso

// gerar backup compactado
mongodump --gzip --db=Vendas --out=C:\Curso

// restaurar banco de dados
mongorestore --db=Vendas C:\Curso

// habilitar mecanismo de armazenamento (WiredTiger já vem por padrão)
mongod --storageEngine wiredtiger //(ou inMemory - disponível somente na versão enterprise)

// utilizar GridFS como estrutura de armazenamento
cd ..
cd "Program Files"
cd MongoDB
cd Server
cd Tools
cd bin
mongofiles -d Vendas -l C:\Curso\Pedidos.csv put Pedidos.csv

// realizar monitoramento do banco de dados por 30 segundos
mongostat --rowcount=30

// realizar monitoramento do banco de dados por 30 segundos e retornar resultado em um arquivo
mongostat --rowcount=30 > arquivo

// monitorar informações sobre o banco de dados
db.serverStatus()

// monitorar informações sobre uma coleção
db.Pedidos.stats()

// identificar operações que estão em execução no banco de dados
db.currentOp()

// encerrar uma operação (basta passar o op_id)
db.killOp()

// apresentar as etapas que o mongodb realizou internamente para realizar uma consulta utilizando .explain
db.NotasFiscais.find({"valor venda": 500]).explain()

// criar index de campo único para otimizar consultas
db.NotasFiscais.createIndex({"valor venda": 1}) // 1 informa que o índice deve ser criado de forma crescente

// criar index de campo composto para otimizar consultas
db.Pedidos.createIndex({"quantidade": 1, "valor venda": 1,"id produto":1})