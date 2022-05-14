document.addEventListener("DOMContentLoaded", function() {

    const tableBody = document.querySelector('.tbody');
    const inputFullName = document.querySelector('.input-name');
    const inputFacultet = document.querySelector('.input-fac');
    const inputBirhDate = document.querySelector('.input-date');
    const inputStudyYears = document.querySelector('.input-study');
    const submitButton = document.querySelector('.submit');
    const clearButton = document.querySelector('.btn-danger');
    const nameHead = document.querySelector('.name');
    const facHead = document.querySelector('.fac');
    const dateHead = document.querySelector('.date');
    const studyHead = document.querySelector('.study');
    const filterName = document.querySelector('.filter-name');
    const filterFac = document.querySelector('.filter-fac');
    const filterDate = document.querySelector('.filter-date');
    const filterStudy = document.querySelector('.filter-study');
    let studentList = [];

    function initTable(initList) {
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        for (obj of initList) {
            const rowStudent = document.createElement('tr');
            const studentFullName = document.createElement('td');
            const studentFacultet = document.createElement('td');
            const studentBirthDate = document.createElement('td');
            const studyYears = document.createElement('td');
            studentFullName.textContent = obj.name;
            studentFacultet.textContent = obj.fac;
            studentBirthDate.textContent = obj.date;
            studyYears.textContent = obj.study;
            rowStudent.append(studentFullName, studentFacultet, studentBirthDate, studyYears);
            tableBody.append(rowStudent);

        }
    }

    function removeError(input, selector) {
        input.addEventListener('click', (elem) => {
            elem.path[0].classList.remove('invalid');
            document.querySelector(`${selector}`).classList.remove('error');
        })
    }

    function submitList() {
        studentList.push({
            name: inputFullName.value.trim(),
            fac: inputFacultet.value.trim(),
            date: getAge(inputBirhDate.value.trim()),
            study: getGraduate(inputStudyYears.value.trim()),
        })
    }

    function sort(column, option) {
        column.addEventListener('click', function() {
            while (tableBody.firstChild) {
                tableBody.removeChild(tableBody.firstChild);
            }
            initTable(studentList.sort(function(a, b) {
                if (a[`${option}`] > b[`${option}`]) {
                    return 1;
                }
                if (a[`${option}`] < b[`${option}`]) {
                    return -1;
                }
                return 0;
            }))
        })
    }

    function getAge(date) {
        const birthDay = new Date(date.split('-')[0], date.split('-')[1], date.split('-')[2]);
        const age = Math.floor((new Date() - birthDay) / (365 * 60 * 60 * 24 * 1000));
        return `${date} (${age} лет)`
    }

    function getGraduate(date) {
        const studyGap = Math.floor(new Date().getFullYear() - Number(date.split('-')[0]));
        if (studyGap > 4 || studyGap === 4 && new Date().getMonth() >= 8)
            return `${date} (закончил)`
        return date + ` (${studyGap} курс)`
    }

    function submitStudent() {
        if (!inputFullName.value.trim()) {
            inputFullName.classList.add('invalid');
            document.querySelector('.error-name').classList.add('error');
            return
        }
        if (inputBirhDate.value.trim().split('-')[0] < 1900) {
            inputBirhDate.classList.add('invalid');
            document.querySelector('.error-date').classList.add('error');
            return
        }

        if (inputStudyYears.value.trim().split('-')[0] > new Date().getFullYear() || inputStudyYears.value.trim().split('-')[0] < 2000) {
            inputStudyYears.classList.add('invalid');
            document.querySelector('.error-study').classList.add('error');
            return
        }
        submitList();
        localStorage.setItem('table', JSON.stringify(studentList));
        initTable(JSON.parse(localStorage.getItem('table')));
    }

    function filterTable(input, option) {
        input.addEventListener('input', function() {
            initTable(studentList.filter(function(item) {
                return item[`${option}`].includes(input.value)
            }))
        })
    }

    function filterTable(input) {
        input.addEventListener('input', function() {
            tempStudentList = studentList.filter(function(item) {
                return item[`name`].includes(filterName.value)
            })
            tempStudentList = tempStudentList.filter(function(item) {
                return item[`fac`].includes(filterFac.value)
            })
            tempStudentList = tempStudentList.filter(function(item) {
                return item[`date`].includes(filterDate.value)
            })
            tempStudentList = tempStudentList.filter(function(item) {
                return item[`study`].includes(filterStudy.value)
            })
            initTable(tempStudentList)
        })
    }

    filterTable(filterName)
    filterTable(filterFac)
    filterTable(filterDate)
    filterTable(filterStudy)
    sort(nameHead, 'name');
    sort(facHead, 'fac');
    sort(dateHead, 'date');
    sort(studyHead, 'study');
    removeError(inputBirhDate, '.error-date');
    removeError(inputStudyYears, '.error-study');
    removeError(inputFullName, '.error-name');

    submitButton.addEventListener('click', submitStudent)
    clearButton.addEventListener('click', function() {
        localStorage.clear('table');
        location.reload();
    })

    if (JSON.parse(localStorage.getItem('table'))) {
        initTable(JSON.parse(localStorage.getItem('table')));
        studentList = JSON.parse(localStorage.getItem('table'));
    }
});