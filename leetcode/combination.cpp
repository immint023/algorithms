#include<iostream>
using namespace std;

int a[100] = {1, 2, 3, 4};
void xuat(int a[], int n, int i) {
  if (i <= n) {
    cout << a[i];
    xuat(a, n, i + 1);
  }
}

void sinh(int n, int k) {
  int i, j;
  while(true) {
    i = k - 1;
    int remain = n - k;
    while (a[i] == remain + i + 1) i--;
    if (i < 0) break;
    a[i] = a[i] + 1;
    for (int x = i + 1; x <= k - 1; x++) {
      a[x] = a[x - 1] + 1;
    }
    xuat(a, 3, 0);
    cout << "\n";
  }
}

int main() {
  sinh(7, 4);
}
