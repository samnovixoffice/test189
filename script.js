const openBtn = document.getElementById('openDialogBtn');
const overlay = document.getElementById('dialogOverlay');
const closeBtn = document.getElementById('closeDialogBtn');
const cancelBtn = document.getElementById('cancelDialogBtn');
const confirmBtn = document.getElementById('confirmDialogBtn');
const testInput = document.getElementById('testInput');

function openDialog() {
    overlay.classList.add('active');
    testInput.value = '';       
    testInput.focus();           
    document.body.style.overflow = 'hidden';
}

function closeDialog() {
    overlay.classList.remove('active');
    document.body.style.overflow = ''; 
}
openBtn.addEventListener('click', openDialog);

closeBtn.addEventListener('click', closeDialog);

cancelBtn.addEventListener('click', closeDialog);

confirmBtn.addEventListener('click', function() {
    const inputValue = testInput.value.trim();
    if (inputValue === '') {
        alert('ی چیزی بنویس');
        return;
    }
    alert(`ثبت شدش\n"${inputValue}"`);
    closeDialog();
});

overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
        closeDialog();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeDialog();
    }
});
