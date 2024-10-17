/*
Code Name: Arduino Line Follower Robot Car
Code URI: https://circuitbest.com/category/arduino-projects/
Author: Make DIY
Author URI: https://circuitbest.com/author/admin/
Description: This program is used to make Arduino Line Follower Robot Car.
Note: You can use any value between 0 to 255 for M1_Speed, M2_Speed, LeftRotationSpeed, RightRotationSpeed.
Here 0 means Low Speed and 255 is for High Speed.
Version: 1.0
License: Remixing or Changing this Thing is allowed. Commercial use is not allowed.
*/

#define in1 9
#define in2 8
#define in3 7
#define in4 6
#define enA 10
#define enB 5


 int M1_Speed = 70; // speed of motor 1
 int M2_Speed = 70; // speed of motor 2
 int LeftRotationSpeed =120;  // Left Rotation Speed
 int RightRotationSpeed = 120; // Right Rotation Speed
 int ledPin = 13; //Led no pino 8
 

 void setup() {
analogRead(A2);
pinMode(ledPin,OUTPUT); //define a porta 7 como saída
 Serial.begin(9600); //Inicia a comunicação serial
  pinMode(in1,OUTPUT);
  pinMode(in2,OUTPUT);
  pinMode(in3,OUTPUT);
  pinMode(in4,OUTPUT);

    pinMode(enA,OUTPUT);
    pinMode(enB,OUTPUT);
      pinMode(A2, INPUT);
      pinMode(A0, INPUT); // initialize Left sensor as an input
      pinMode(A1, INPUT); // initialize Right sensor as an input

}

void loop() {

     
  int LEFT_SENSOR = digitalRead(A0);
  int RIGHT_SENSOR = digitalRead(A1);
 ///ler o valor do LDR
 analogRead(A2); //O valor lido será entre 0 e 1023
 
 //se o valor lido for maior que 500, liga o led
 
 if(analogRead(A2)>= 100){
 digitalWrite(ledPin,HIGH);

 // senão, apaga o led
 }
 else
 {
 digitalWrite(ledPin,LOW);

 }
 //imprime o valor lido do LDR no monitor serial
 Serial.println(analogRead(A2));
 delay(10);

if((analogRead(A2)>100)&& (analogRead(A2)<200)) {
     digitalWrite(in1, LOW);
     digitalWrite(in2, LOW);
     digitalWrite(in3, LOW);
     digitalWrite(in4, LOW);
    }
else if(RIGHT_SENSOR==0 && LEFT_SENSOR==0) { 
  forward(); //FORWARD
    }

    
  else if(RIGHT_SENSOR==0 && LEFT_SENSOR==1) {
    right(); //Move Right
 }

  else if(RIGHT_SENSOR==1 && LEFT_SENSOR==0) {
    left(); //Move Left
}

}



void forward()
{
            digitalWrite(in1, HIGH);
            digitalWrite(in2, LOW);
            digitalWrite(in3, HIGH);
            digitalWrite(in4, LOW);

                analogWrite(enA, M1_Speed);
                analogWrite(enB, M2_Speed);
}

void backward()
{
            digitalWrite(in1, LOW);
            digitalWrite(in2, HIGH);
            digitalWrite(in3, LOW);
            digitalWrite(in4, HIGH);

                analogWrite(enA, M1_Speed);
                analogWrite(enB, M2_Speed);
}

void right()
{
            digitalWrite(in1, LOW);
            digitalWrite(in2, HIGH);
            digitalWrite(in3, HIGH);
            digitalWrite(in4, LOW);

                analogWrite(enA, LeftRotationSpeed);
                analogWrite(enB, RightRotationSpeed);
}

void left()
{
            digitalWrite(in1, HIGH);
            digitalWrite(in2, LOW);
            digitalWrite(in3, LOW);
            digitalWrite(in4, HIGH);

                analogWrite(enA, LeftRotationSpeed);
                analogWrite(enB, RightRotationSpeed);
}

void Stop()
{
            digitalWrite(in1, LOW);
            digitalWrite(in2, LOW);
            digitalWrite(in3, LOW);
            digitalWrite(in4, LOW);
}
