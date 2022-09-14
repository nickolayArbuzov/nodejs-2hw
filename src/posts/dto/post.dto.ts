import { Transform, TransformFnParams } from "class-transformer";
import { IsString, Length } from "class-validator";

export class CreatePostDto {
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsString()
    @Length(1, 30)
    readonly title: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsString()
    @Length(1, 100)
    readonly shortDescription: string;
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsString()
    @Length(1, 1000)
    readonly content: string;

    @IsString()
    readonly bloggerId: string;
}

export class UpdatePostDto extends CreatePostDto {}