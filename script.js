var trigger = document.getElementById("trigger-modal");
var modal = document.getElementById("form-ct");
var closeModal = document.getElementById("close");
var backdrop = document.getElementById("RegisterBackdrop");

trigger.onclick = function() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

closeModal.onclick = function() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}