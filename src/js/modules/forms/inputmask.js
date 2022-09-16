/* Маски для полей */

// Подключение списка активных модулей
import { modules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	modules.inputmask = Inputmask().mask(inputMasks);
}