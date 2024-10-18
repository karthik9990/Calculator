from django.shortcuts import render


def calculator_view(request):
    return render(request, 'calculator/calculator.html')


def advanced_calculator(request):
    return render(request, 'calculator/advanced_calculator.html')
