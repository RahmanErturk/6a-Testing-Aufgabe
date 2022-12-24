# 6a-Testing-Aufgabe

## Aufgabe 1

Erstelle eine Funktion, die folgende Bedingungen erfüllt:

1. Werden keine Argumente übergeben, soll die Funktion "false" zurückgeben.
2. Wird ein Argument übergeben, soll es mit sich selbst multipliziert und das Ergebnis zurückgegeben werden (a \* a).
3. Ist das Argument keine ganze Zahl (Integer), soll "false" zurückgegeben werden.
4. Werden zwei Argumente übergeben, sollen sie multipliziert und das Ergebnis zurückgegeben werden (a \* b).
5. Werden beliebig viele Argumente übergeben, sollen sie alle multipliziert und das Ergebnis zurückgegeben werden (a _ b _ c \* ...).

## Aufgabe 2

Erstelle eine Funktion, die folgende Bedingungen erfüllt:

1. Die Funktion benötigt exakt zwei Argumente. Werden sie nicht übergeben, soll ein Fehler geworfen werden.
2. Die Argumente müssen positive Zahlen sein. Falls nicht, soll ein Fehler geworfen werden.
3. Mit den zwei Argumenten soll der Satz des Pythagoras abgebildet werden: a^2 + b^2 = c^2. Die Funktion soll c ausgeben.

## Aufgabe 3

Erweitere die Funktion aus Aufgabe 2 um folgende Bedingungen:

1. Die Funktion soll nur noch ein Objekt als Argument erhalten. Das Objekt soll die beiden ursprünglichen Parameter abbilden.
2. Das Objekt soll genau zwei Properties enthalten.
3. Die Properties können entweder a & b, a & c oder b & c sein.
4. Die Funktion soll nach der fehlenden Variable auflösen: a & b => c, a & c => b oder b & c => a
