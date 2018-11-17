/**
 * Copyright (C) Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * September 2018
 */

import * as striptags from "striptags";

export class HtmlUtilities {
	public static stripTags(input: string): string {
		return striptags(input);
	}
}