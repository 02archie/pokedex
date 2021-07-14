import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class Utils {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  public showMessage(
    message: string,
    action: string = 'Ok',
    time: number = 2500
  ): void {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

  public showErrorMessage(
    message: string = 'Ocurrió un error. Inténtelo más tarde.',
    action: string = 'Ok',
    time: number = 2500
  ): void {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

  public clearHttpErrors(error: any): string {
    let message = '';
    console.log('mensaje erorr utils');
    console.log(error.error.errors);
    if (
      error &&
      error.error &&
      error.error.errors &&
      typeof error.error.errors === 'object'
    ) {
      const errors = error.error.errors;
      const keys = Object.keys(errors);
      keys.map((key, i) => {
        message += errors[key][0];
        if (i < keys.length - 1) {
          message += ', ';
        }
      });
    } else if (
      error &&
      error.error &&
      error.error.errors &&
      typeof error.error.errors !== 'object'
    ) {
      message = error.error.errors;
    } else {
      message = 'Ocurrió un error';
    }
    return message;
  }

  /**
   * Navegación
   * @param route Ruta
   */
  public redirect(route: string) {
    this.router.navigate([route]);
  }

  /**
   * Validación
   * @param formGroup
   */
  public validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  /**
   * Alerts de confirmación
   * @param messageModal
   * @param title
   * @param btnAcceptText
   * @param btnCancelText
   * @param imageHeader
   * @param btnAccept
   * @param btnCancel
   * @returns
   */
  getDataDialog(
    messageModal: string,
    imageHeader: string = 'ico_confirm.svg',
    btnAccept: Boolean = true,
    btnCancel: Boolean = true,
    btnAcceptText: string = 'Aceptar',
    btnCancelText: string = 'Cancelar'
  ) {
    const textAlert = messageModal;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      text: textAlert,
      imageHeader,
      btnAccept,
      btnAcceptText,
      btnCancel,
      btnCancelText,
    };
    return dialogConfig;
  }
}
