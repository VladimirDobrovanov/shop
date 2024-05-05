document.addEventListener("DOMContentLoaded", function () {
    const validation = new JustValidate('.form', {
        errorLabelStyle: {
            color: '#ff7979' // исправлено Color на color
        }
    });
    const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);

    validation
        .addField('.name', [{
                rule: 'minLength',
                value: 6,
                errorMessage: "Вы не ввели имя"
            },
            {
                rule: 'maxLength',
                value: 60,
                errorMessage: "Вы ввели больше чем положено"
            }
        ])
        .addField('.mail', [{
                rule: 'required',
                errorMessage: 'Поле нужно заполнить',
            },
            {
                rule: 'email',
                errorMessage: 'Вы не ввели email',
            }
        ])
        .addField('.tel', [{
            rule: "function",
            validator: function (name, value) {
                const phone = selector.inputmask.unmaskedvalue();
                return phone.length === 10
            },
            errorMessage: 'Вы не ввели телефон',
        }])
        // Добавляем проверку для инпута с id="formIndex"
        .addField('.index', [{
            rule: 'required',
            errorMessage: 'Поле нужно заполнить',
          },
          {
            rule: 'length',
            params: [6, 6],
            errorMessage: 'Индекс должен состоять из 6 цифр',
          },
          {
            rule: 'numeric',
            errorMessage: 'Индекс должен содержать только цифры',
          }
        ])
        // Добавляем обязательную проверку для чекбокса с id="formAgreement"
        .addField('.checkbox__input', {
            rule: 'required',
            errorMessage: 'Вы должны дать согласие на обработку персональных данных',
        });
});