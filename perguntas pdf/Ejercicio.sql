-- 1. Como você seleciona todas as colunas de uma tabela em SQL? (Nota: 0,2)
-- a) SELECT ALL
-- b) SELECT *
-- c) SELECT COLUMNS
-- d) SELECT FULL

-- Resposta: b) SELECT * (comando SQL para selecionar todas as colunas de uma tabela)

SELECT * FROM nome_da_tabela; -- Exemplo de comando SQL para selecionar todas as colunas de uma tabela chamada "nome_da_tabela"








-- 2. Qual é o comando SQL utilizado para filtrar resultados em uma consulta? (Nota: 0,2)
-- a) LIMIT
-- b) FILTER
-- c) ORDER BY
-- d) WHERE

-- Resposta: d) WHERE (comando SQL para filtrar resultados com base em uma condição)
SELECT * FROM nome_da_tabela WHERE condição; -- Exemplo de comando SQL para filtrar resultados usando a cláusula WHERE, onde "condição" é a condição que deve ser atendida para os registros serem incluídos nos resultados.






 -- 3. Qual é o comando SQL utilizado para ordenar os resultados de uma consulta em ordem
-- ascendente? (Nota: 0,2)
-- a) ORDER ASC
-- b) SORT ASC
-- c) ASCENDING
-- d) ORDER BY

SELECT * FROM nome_da_tabela ORDER BY coluna ASC; -- Exemplo de comando SQL para ordenar os resultados em ordem ascendente com base em uma coluna específica chamada "coluna".




-- Qual é o comando SQL utilizado para inserir novos dados em uma tabela? (Nota: 0,2)
-- a) ADD
-- b) INSERT
-- c) UPDATE
-- d) CREATE

INSERT INTO nome_da_tabela (coluna1, coluna2, coluna3) VALUES (valor1, valor2, valor3); -- Exemplo de comando SQL para inserir novos dados em uma tabela chamada "nome_da_tabela", onde "coluna1", "coluna2" e "coluna3" são os nomes das colunas e "valor1", "valor2" e "valor3" são os valores a serem inseridos nessas colunas.





-- Qual é o comando SQL utilizado para atualizar dados em uma tabela? (Nota: 0,2)
-- a) MODIFY
-- b) UPDATE
-- c) ALTER
-- d) SET

UPDATE nome_da_tabela SET coluna = novo_valor WHERE condição; -- Exemplo de comando SQL para atualizar dados em uma tabela, onde "coluna" é o nome da coluna a ser atualizada, "novo_valor" é o novo valor a ser atribuído e "condição" é a condição que determina quais registros serão atualizados.
