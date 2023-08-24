import { repl } from "@nestjs/core"
import { AppModule } from "./src/app.module"

export async function bootstrap() {
    await repl(AppModule)
}

bootstrap()