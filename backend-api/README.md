# Instruções para rodar o kafka

### Para subir o Kafka siga as seguintes instruções:
* cd backend-api
* docker-compose up -d (O -d é para rodar em modo daemon e liberar o terminal para o próximo passo)

### Para rodar o json-serveless, porta 3000
* jsonsls run ./db/db.json (o caminho é relativo aonde vc se encontra)

### Para subir o servidor que gerenciará o message broker, porta 3001
* cd api && npm run serve

### Para rodar o servidor do signup, porta 3002
* cd signup && npm run serve