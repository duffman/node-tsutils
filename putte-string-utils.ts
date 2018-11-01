/*=--------------------------------------------------------------=

 PutteTSNode - Yet Another Typescript Utilities Collection

 Author : Patrik Forsberg
 Email  : patrik.forsberg@coldmind.com
 GitHub : https://github.com/duffman
 Date   : 2018-11-01

 Use this software free of charge, the only thing I ask is that
 you obey to the terms stated in the license, i would also like
 you to keep the file header intact.

 This software is subject to the LGPL v2 License, please find
 the full license attached in LICENCE.md

 =----------------------------------------------------------------= */

export class PStrUtils {
	public static isEmpty(str: string) {
		return (str === undefined) || (!str || 0 === str.length);
	}

	public static replaceStr(source: string, find: string, replaceWith: any): string {
		return source.replace(find, String(replaceWith));
	}

	public static replaceEx = function (originalString: string, oldValue: string, newValue: string, ignoreCase: boolean = false) {
		//
		// if invalid data, return the original string
		//
		if ((originalString == null) || (oldValue == null) || (newValue == null) || (oldValue.length == 0))
			return (originalString);
		//
		// set search/replace flags
		//
		let Flags: string = (ignoreCase) ? "gi" : "g";
		//
		// apply regex escape sequence on pattern (oldValue)
		//
		let pattern = oldValue.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
		//
		// replace oldValue with newValue
		//
		let str = originalString.replace(new RegExp(pattern, Flags), newValue);

		return str;
	}
}