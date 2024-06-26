import * as fs from "fs";
import * as path from "path";

export module FileUtils {
    export function getAbsolutePath(filePath: string) {
        return path.resolve(filePath);
    }

    export function fileExistsSync(filePath: string) {
        try {
            return fs.statSync(filePath).isFile();
        } catch (err) {
            return false;
        }
    }

    export function getAllFileNamesFromFolder(dir: string) {
        const fileNames: string[] = [];

        fs.readdirSync(dir).forEach(function (file) {
            file = dir + "/" + file;
            const stat = fs.statSync(file);

            if (stat && stat.isDirectory()) {
                fileNames.push(...FileUtils.getAllFileNamesFromFolder(file));
            } else {
                fileNames.push(file);
            }
        });

        return fileNames;
    }
}
