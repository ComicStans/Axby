package ComicStansMain.web;

import ComicStansMain.data.*;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collection;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping(value = "api/boards", headers = "Accept=application/json")
public class GuildBoardsController {
    private final GuildBoardsRepository gbr;
    private final UsersRepository usersRepository;
    private final GamesRepository gamesRepository;

    @GetMapping
    private Collection<GuildBoard> getAll() {
        return gbr.findAll();
    }

    @GetMapping("creator")
    private Collection<GuildBoard> findByCreator() {
        return gbr.findAllByCreator(usersRepository.findByUsername("wesleyb"));
    }

    @PostMapping
    private void createBoard(@RequestBody GuildBoard board) {
        board.setGame(gamesRepository.getById(1L));
        board.setDateCreated(LocalDate.now());
        gbr.save(board);
    }
}