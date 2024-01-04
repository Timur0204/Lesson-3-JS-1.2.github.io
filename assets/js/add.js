   

        function calc() {
            let term = document.querySelector('#term').value;
            let sum = document.querySelector('#sum').value;
            let rate = document.querySelector('#rate').value;
            let result = document.querySelector('#result');
        
            if (isNaN(term) || isNaN(sum) || isNaN(rate) || term <= 0 || sum <= 0 || rate <= 0) {
                result.innerHTML = `<h1 style="color: red; margin-top: 15px">Введите корректные числа</h1>`;
                return;
            }
        
            let mRate = rate / 100 / 12;
            let totalPayment = 0;
        
            result.innerHTML = '';
        
            result.innerHTML += '<div style="display: flex; gap: 25px; justify-content: center; margin-bottom: 15px; border-bottom: 1.5px solid green; padding-bottom: 10px"><div>Месяц</div><div>Задолженность по кредиту</div><div>Погашение кредита</div><div>Проценты по кредиту</div><div>Комиссии</div><div>Выплаты в месяц</div></div>';
        
            let currentBalance = sum;
            let totalPrincipal = 0;
            let totalInterest = 0;
            let totalCommission = 0;
            let totalPaymentsForAllMonths = 0; 
        
            for (let i = 1; i <= term; i++) {
                let interest = currentBalance * mRate;
                let principalPayment = (sum * mRate) / (1 - Math.pow(1 + mRate, -term));
                let commissionRate = 0;
        
                let commission = currentBalance * commissionRate;
        
                let principalPaymentThisMonth = principalPayment - interest - commission; // Расчет суммы, которая будет направлена на погашение основного долга в текущем месяце
        
                if (i !== term) {
                    currentBalance -= principalPaymentThisMonth;
                } else {
                    principalPaymentThisMonth = currentBalance;
                    currentBalance = 0;
                }
        
                totalPayment = principalPaymentThisMonth + interest + commission;
                totalPaymentsForAllMonths += totalPayment; 
                totalPrincipal += principalPaymentThisMonth;
                totalInterest += interest;
                totalCommission += commission;
        
                result.innerHTML += `<div style="display: flex; gap: 125px; justify-content: center; margin-bottom: 15px"><div>${i}</div><div>${currentBalance.toFixed(2)}</div><div>${principalPaymentThisMonth.toFixed(2)}</div><div>${interest.toFixed(2)}</div><div>${commission.toFixed(2)}</div><div>${totalPayment.toFixed(2)}</div></div>`;
            }
        
            result.innerHTML += `<div style="display: flex; gap: 125px; justify-content: center; margin-bottom: 15px"><div>Итого</div><div>${(sum - totalPrincipal).toFixed(2)}</div><div>${totalPrincipal.toFixed(2)}</div><div>${totalInterest.toFixed(2)}</div><div>${totalCommission.toFixed(2)}</div><div>${totalPaymentsForAllMonths.toFixed(2)}</div></div>`;
        }
        