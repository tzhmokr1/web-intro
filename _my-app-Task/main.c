#include <stdio.h>

int fakultaet(int value);

int main()
{
    printf("Die Fakultaet ist %i: \n", fakultaet(4));

    system("Pause");
    return 0;
}

int fakultaet(int value)
{
    if (value == 1)
    {
        return 1;
    }
    value = value * fakultaet(value - 1);
}
