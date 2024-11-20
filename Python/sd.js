// Definición de pines
const int LED_ROJO = 8;
const int LED_AMARILLO = 9;
const int LED_VERDE = 10;

void setup() {
  // Configurar los pines como salidas
  pinMode(LED_ROJO, OUTPUT);
  pinMode(LED_AMARILLO, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
}

void loop() {
  // Secuencia de semáforo
  digitalWrite(LED_VERDE, HIGH); // Enciende el verde
  delay(5000);                   // Espera 5 segundos
  digitalWrite(LED_VERDE, LOW);  // Apaga el verde

  digitalWrite(LED_AMARILLO, HIGH); // Enciende el amarillo
  delay(2000);                      // Espera 2 segundos
  digitalWrite(LED_AMARILLO, LOW);  // Apaga el amarillo

  digitalWrite(LED_ROJO, HIGH);     // Enciende el rojo
  delay(5000);                      // Espera 5 segundos
  digitalWrite(LED_ROJO, LOW);      // Apaga el rojo
}