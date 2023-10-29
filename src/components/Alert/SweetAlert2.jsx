import Swal from "sweetalert2";

const ConfirmAlert = (message) => {
  return Swal.fire({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });
};

const AlertSuccess = (message) => {
  Swal.fire({
    title: "Success",
    text: message,
    showConfirmButton: false,
    icon: "success",
    timer: "1200",
  });
};

const AlertFailed = (message) => {
  Swal.fire({
    title: "Failed",
    text: message,
    showConfirmButton: false,
    icon: "error",
    timer: "1500",
  });
};

export { ConfirmAlert, AlertSuccess, AlertFailed };
